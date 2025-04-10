import { useState } from "react"

/**
 * Static Form Component
 * Renders the initial registration form with email and password fields
 * 
 * @param {Object} props
 * @param {Object} props.data - Current form data
 * @param {Function} props.handleChange - Callback for form submission
 */
export default function StaticForm({ data, handleChange }) {
    const [email, setEmail] = useState(data.email);
    const [password, setPassword] = useState(data.password);

    /**
     * Handles form submission
     * @param {Event} event - Form submission event
     */
    function handleSubmit(event) {
        event.preventDefault();

        handleChange({
            ...data,
            email,
            password
        })
    }

    return <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
        </div>
        <div class="mb-5">
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Next page</button>
    </form>
}