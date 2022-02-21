import React from 'react';

function Alerts(props) {
  return (
    props.alert &&
    <div>
    <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Success!</strong>{props.alert}
</div>
    </div>
  );
}

export default Alerts;

