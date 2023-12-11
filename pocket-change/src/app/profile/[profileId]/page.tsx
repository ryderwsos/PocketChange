export default function UserProfilePage({ 
    params 
}: {
    params: {
        profileId: string
    }
}) {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen py-2"
        >
            <h1>Profile</h1>
            <hr />
            <p className="text-2xl text-accent">
                Profile Page for User with Profile ID: {params.profileId}
            </p>
        </div>
    )
}