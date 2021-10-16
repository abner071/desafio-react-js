import Summary from '../../components/Summary';
import Servers from '../../components/Servers';
import './styles.css';

function Body() {
  return (
    <div className="body">
      <Summary />
      <Servers />
    </div>
  );
}

export default Body;