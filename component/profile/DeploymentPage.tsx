import {CheckCircle, Clock, Plus, RefreshCw, XCircle} from "lucide-react";
import {useState} from "react";

const DeploymentPage = () => {

    const [deployments, setDeployments] = useState([
        { id: 1, project: 'Main Website', environment: 'Production', status: 'Success', commit: 'a1b2c3d', author: 'John Doe', timestamp: '2023-06-15 14:30' },
        { id: 2, project: 'API service', environment: 'Staging', status: 'In Progress', commit: 'e4f5g6h', author: 'Jane Smith', timestamp: '2023-06-15 15:45' },
        { id: 3, project: 'Mobile App', environment: 'Development', status: 'Failed', commit: 'i7j8k9l', author: 'Bob Johnson', timestamp: '2023-06-15 16:20' },
    ])

    const StatusBadge = ({ status }: { status: string }) => {
        let color
        let icon

        switch (status) {
            case 'Success':
                color = 'bg-green-100 text-green-800'
                icon = <CheckCircle className="h-4 w-4 mr-1" />
                break
            case 'In Progress':
                color = 'bg-blue-100 text-blue-800'
                icon = <RefreshCw className="h-4 w-4 mr-1 animate-spin" />
                break
            case 'Failed':
                color = 'bg-red-100 text-red-800'
                icon = <XCircle className="h-4 w-4 mr-1" />
                break
            default:
                color = 'bg-gray-100 text-gray-800'
                icon = <Clock className="h-4 w-4 mr-1" />
        }

        return (
            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full items-center ${color}`}>
        {icon}
                {status}
      </span>
        )
    }
    return (
        <div className="p-8 max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Deployments</h1>
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center"
                >
                    <Plus className="h-5 w-5 mr-2"/>
                    New Deployment
                </button>
            </div>

            {/* Deployments List */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Environment
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commit
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {deployments.map((deployment) => (
                        <tr key={deployment.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{deployment.project}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">{deployment.environment}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <StatusBadge status={deployment.status}/>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{deployment.commit}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">{deployment.author}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {deployment.timestamp}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DeploymentPage;