import { createContext, useContext, useState, useEffect } from "react";


const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Mock users 
const MOCK_USERS = [
  { id: 1, email: "amir@gmail.com", password: "amir123", name: "Amir Ghouari" },
  { id: 2, email: "test@test.com", password: "test123", name: "Test User" },
];

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // load usr from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (email, password) => {
    // Find user in mock users
    const foundUser = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      // Create user object without password
      const userData = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
      };
      
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return { success: true, user: userData };
    } else {
      return { success: false, error: "Invalid email or password" };
    }
  };

  // Register function (demo)
  const register = (name, email, password) => {
    // Check if user already exists
    const existingUser = MOCK_USERS.find((u) => u.email === email);
    
    if (existingUser) {
      return { success: false, error: "Email already exists" };
    }

    
    const newUser = {
      id: MOCK_USERS.length + 1,
      email,
      password,
      name,
    };

    // Add to mock users
    MOCK_USERS.push(newUser);

    // Auto login after registration
    const userData = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
    };

    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    return { success: true, user: userData };
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Check if user is logged in
  const isAuthenticated = !!user;

  // Value to provide to consumers
  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

