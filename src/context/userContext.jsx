import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [password, setPassword] = useState(null);
	const [activeSession, setActiveSession] = useState(false);
	const validUser = {user: 'user', password: 'password'}

	return (
		<UserContext.Provider value={{ user, setUser, password, setPassword, validUser, activeSession, setActiveSession}}>
			{children}
		</UserContext.Provider>
	);
};
export default UserProvider;
