
export default function InlineComponent(){
    const inline = {
        backgroundColor:'black',
        color:'cyan'
      }
    return(
      <div>
        <p style={inline}> I got done internal styling</p>
        <p style={{fontSize:'150%',color:'purple',textAlign:'center'}}>Heyyooo Me too but bigger</p>
      </div>
    )
}