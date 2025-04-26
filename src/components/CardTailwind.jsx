function CardTailwind({ user }) {
    return (
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden p-6">
        <img className="w-24 h-24 rounded-full mx-auto" src={user.avatar_url} alt={user.login} />
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold">{user.name || user.login}</h2>
          <p className="text-gray-600">{user.bio || "No bio available"}</p>
        </div>
      </div>
    );
  }
  
  export default CardTailwind;
  