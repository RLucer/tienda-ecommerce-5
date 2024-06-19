import Alert from 'react-bootstrap/Alert';

function LinksExample(prop) {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
         {prop.message}
        </Alert>
      ))}
    </>
  );
}

export default LinksExample;