function NotFound(): JSX.Element {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      padding: '52px',
      alignItems: 'center',
    }}
    >
      <h1>404. Page not found</h1>
      <a href="/">Вернуться на главную</a>
    </section>
  );
}

export default NotFound;
