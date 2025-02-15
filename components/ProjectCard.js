export default function ProjectCard({ title, description }) {
    return (
        <div className="rounded-lg shadow-lg overflow-hidden bg-white">
            <div className="p-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-700 mt-2">{description}</p>
            </div>
        </div>
    );
}
