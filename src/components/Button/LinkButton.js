import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LinkButton = ({ path, label }) => {
  return (
    <Link to={path}>
      <Button className="m-all-10" variant="outline-success">
        {label}
      </Button>
    </Link>
  );
};

export default LinkButton;
