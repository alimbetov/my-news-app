import '../components/styles/Main.css';
import '../components/styles/Article.css';
function Card(props) {
  return (
    <div className="page-article">
    <table border="1" > 
        <tr>  <th>
        <div className="page-art">
        <a href={props.a.url} target="_blank" rel="noopener noreferrer">
        {props.a.title} 
            </a> 
            </div> 
            </th>
      </tr>
        <tr>
            <td>
            
               {props.a.abstract}
             </td>
        </tr>
    </table>
    </div>
  );
}

export default Card;