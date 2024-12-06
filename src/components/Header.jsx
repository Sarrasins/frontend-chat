export default function Header() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          padding: "10px",
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            height: "120px",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    );
  }
  