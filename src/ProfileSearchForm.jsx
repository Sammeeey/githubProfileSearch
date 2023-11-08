// import './ProfileSearchForm.css'

import { useForm } from "react-hook-form"

function ProfileSearchForm({setGithubUser}) {
    const GITHUB_API_BASE = 'https://api.github.com/users/'

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: '',
        }
    })

    const onSubmit = async (formData) => {
        // console.log(formData)
        const githubUserRequest = await fetch(`${GITHUB_API_BASE}${formData.username}`)
        const githubUserJson = await githubUserRequest.json()
        // console.log(githubUserJson)
        setGithubUser(githubUserJson)
    }

    // console.log(watch('username'))

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">Github Username</label>
            <input type="text" {...register("username")} />
            <button type="submit">Search now</button>
        </form>
        </>
    )
}

export default ProfileSearchForm
