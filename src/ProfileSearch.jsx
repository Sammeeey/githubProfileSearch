// import './ProfileSearch.css'

import { useState } from "react"
import ProfileSearchForm from "./ProfileSearchForm"

function ProfileSearch() {
    const [githubUser, setGithubUser] = useState({})
    
    return (
        <>
        <ProfileSearchForm {...{setGithubUser}} />
        {githubUser.login ?
            <>
            <p>{githubUser?.login}</p>
            <img src={githubUser?.avatar_url} alt={`Github User ${githubUser?.login}`} />
            </>
        : 'User ' + githubUser?.message
        }
        </>
    )
}

export default ProfileSearch
