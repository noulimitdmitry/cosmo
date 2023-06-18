
const Sidebar = () => {
  return (
    <div className="sidebar" style={{ background: "gold", fontSize: "50px", gridArea:"sidebar" }}>
      <ul>
        <li>Profile</li>
        <li>Messages</li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar