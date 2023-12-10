export default function Container({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div
            className="flex flex-col items-center justify-center w-4/5"
        >
            {children}
        </div>
    )
}