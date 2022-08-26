import formStyles from "../styles/Forms.module.scss"
import styles from "../styles/Home.module.scss"
import React, { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"
import getWalletAddress from "../utils/getWalletAddress"
import { getCookies } from "cookies-next"
import getProjectByAddress from "../utils/getProjectByAddress"
import { useRouter } from "next/router"
import getProfileData from "../utils/getProfileData"

export default function PickAProj() {
    const [wallet, setWallet] = useState("")
    const router = useRouter()
    const [ids, setIds] = useState()
    const [user, setUser] = useState()
    useEffect(() => {
        const { loggedIn } = getCookies()
        if (typeof window !== "undefined" && !loggedIn) {
            router.push("/").then()
        }
        getWalletAddress().then(wallet => {
            setWallet(wallet)
            getProjectByAddress(wallet).then(res => setIds(res))
            getProfileData(wallet).then(res => setUser(res))
        })
    }, [router.query])
    return (
        <div className={formStyles.backgroundImg}>
            <Sidebar />

            <div className={formStyles.secondDivProj}>
                <div className={styles.container}>
                    {/* for people who has projects otherwise is only shown the user profile*/}
                    <div className={styles.alignDivProj}>What are we setting?</div>
                    <div className={styles.alignDivProj}>
                        <div className={styles.projSection}>
                            <div className={styles.projTitle}>{user?.name}</div>
                            <a href={`/user-profile-settings/?profAddress=${wallet}`} className={styles.projSectionA}>
                                <img alt={"user-pfp"} className={styles.pfp} src={user?.imageUri} />
                            </a>
                        </div>
                        {
                            ids?.response !== "data not found" &&
                            ids?.ids.map((name) =>
                                <div className={styles.projSection}>
                                    <div className={styles.projTitle}>{name[1]}</div>
                                    <a href={`/project-settings/?profAddress=${wallet}&id=${name[0]}`} className={styles.projSectionA}>
                                        <img alt={"project pfp"} className={styles.pfp} src={name[2]} />
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
