
/**
 * Component to display the flow of expenses by project.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.projectExpensesFlow - Array of project expense objects.
 * @param {string} props.projectExpensesFlow[].id - The unique identifier for the project.
 * @param {string} props.projectExpensesFlow[].projectname - The name of the project.
 * @param {number} props.projectExpensesFlow[].projectbudget - The budget assigned to the project.
 * @param {number} [props.projectExpensesFlow[].totalexpenses] - The total expenses incurred by the project.
 * @returns {JSX.Element} The rendered component.
 */
export function ProjectExpensesFlow({ projectExpensesFlow }) {

    return (
        <div className="sm:w-full w-[370px] mx-auto bg-gray-800 bg-opacity-20 rounded-lg shadow-lg mt-6 p-6 max-h-[400px] overflow-y-auto">
            <h2 className="text-2xl font-bold text-slate-200 mb-4">Gasto por Proyecto</h2>
            {projectExpensesFlow.map((project, index) => (
                <div key={`${project.id}-${index}`} className="bg-gray-700 bg-opacity-80 p-4 rounded-lg shadow-inner mb-4">
                    <h3 className="text-lg font-semibold text-slate-100">{project.projectname}</h3>
                    <p>Presupuesto Asignado: <span className="text-green-500">₡{project.projectbudget || 0}</span></p>
                    <p>Gastos Totales: <span className="text-red-500">₡{project.used_budget || 0}</span></p>
                    <p>Presupuesto Restante: <span className="text-yellow-500">₡{project.remaining_budget || 0}</span></p>
                    <p>Status: {project.status}</p>
                </div>
            ))}
        </div>
    );
}