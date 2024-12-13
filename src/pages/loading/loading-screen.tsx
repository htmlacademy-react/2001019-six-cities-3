function LoadingScreen(): JSX.Element {

  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      padding: '40vh',
      alignItems: 'center',
    }}
    >
      <p style={{
        fontSize: '50px',
        color: '#4481c3',
      }}
      >Loading...
      </p>
    </section>
  );
}

export default LoadingScreen;
