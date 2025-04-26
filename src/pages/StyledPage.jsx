import { useState } from "react";
import CardStyled from "../components/CardStyled";

function StyledPage() {
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
    <div style={{ padding: "2rem" }}>
      <input 
        type="text" 
        placeholder="Enter GitHub username" 
        style={{ border: "1px solid #ccc", padding: "0.5rem", borderRadius: "0.5rem", marginRight: "1rem" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button 
        onClick={fetchUser}
        style={{ backgroundColor: "#3B82F6", color: "white", padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "none" }}
        disabled={loading}
      >
        {loading ? "Loading..." : "Search"}
      </button>

      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
      {user && <CardStyled user={user} />}
    </div>
  );
}

export default StyledPage;
