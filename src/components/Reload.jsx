import React, { useEffect } from 'react';

function Reload() {
  useEffect(() => {
    window.location.reload();
  }, []);

  return (
    <div>
      <p>Recargando la página...</p>
    </div>
  );
}

export default Reload
