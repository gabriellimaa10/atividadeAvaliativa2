import { useState } from "react";
import CardTailwind from "../components/CardTailwind";

function TailwindPage() {
  const [user, setUser] = useState(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://api.github.com/users/${input}`);
      if (!res.ok) throw new Error("Usuário não encontrado!");
      const data = await res.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <input 
        type="text" 
        placeholder="Enter GitHub username" 
        className="border p-2 rounded mr-2" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button 
        onClick={fetchUser} 
        className="bg-blue-500 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? "Loading..." : "Search"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {user && <CardTailwind user={user} />}
    </div>
  );
}

export default TailwindPage;
