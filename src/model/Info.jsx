

function Info(prop) {
  return (
    <div className="col-md-2 d-md-block d-none">
    <div className="card p-2  vh-80 " id='sidebar'>
        <h4 className="fa-duotone text-end fa-xmark icons text-info mx-2" onClick={hidethis}> </h4>
        <div className='d-flex  align-items-center justify-content-center '>
            <img src="https://www.ourmigrationstory.org.uk/uploads/_CGSmartImage/img-a2beae8392617b8c02b85d8b9197fb96"  className='fullsize ' alt="" />
        </div>
        <h4 className="text-center">{prop.name}</h4>
    </div>
    </div>
  );
}

function hidethis(){
    document.getElementById('sidebar').classList.add('d-none');
    document.getElementById('chatpart').classList.remove('col-md-8');
    document.getElementById('chatpart').classList.add('col-md-10');

}

export default Info;
