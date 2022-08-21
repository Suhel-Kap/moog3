import { ethers } from "ethers"
import { MoogDaoContractAddress, MoogDaoAbi } from "../constants"
import { sequence } from "0xsequence"

const useContract = () => {
    const getContract = async () => {
        const network = "mumbai"
        await sequence.initWallet(network, {
            networkRpcUrl: "https://matic-mumbai.chainstacklabs.com",
        })
        const wallet = await sequence.getWallet()
        const provider = await wallet.getProvider()
        const signer = await wallet.getSigner()

        const moogContract = new ethers.Contract(MoogDaoContractAddress, MoogDaoAbi, provider)
        return moogContract.connect(signer)
    }

    const addUserProfile = async (user) => {
        const contract = await getContract()
        const { name, image, profileUri } = user
        await contract.createUserProfile(name, image, profileUri)
    }

    const updateUserProf = async (user) => {
        const contract = await getContract()
        const { name, id, image, profileUri } = user
        await contract.updateUserProfile(id, image, profileUri, name)
    }

    const addProjectProfile = async (project) => {
        const contract = await getContract()
        const { name, image, banner, profileUri } = project
        await contract.createProjectProfile(name, image, banner, profileUri)
    }

    const updateProjectProf = async (project) => {
        const contract = await getContract()
        const {name, id, image, banner, profileUri} = project
        await contract.updateProjectProfile(id, image, banner, profileUri, name)
    }

    const createPost = async (post) => {
        const contract = await getContract()
        const {id, postUri} = post
        await contract.addPost(postUri, id)
    }

    const createContribution = async (contribution) => {
        const contract = await getContract()
        const {title, contributionUri, projectId} = contribution
        await contract.addContribution(title, "", contributionUri, projectId)
    }

    return {
        addUserProfile,
        updateUserProf,
        addProjectProfile,
        updateProjectProf,
        addPost: createPost,
        createContribution
    }
}

export default useContract
