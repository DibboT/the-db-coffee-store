import Swal from "sweetalert2";


const CoffeeCard = ({ coffee }) => {
    const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
    return (
        <div className="card card-side bg-red-100 shadow-xl">
            <figure><img src={photo} alt="" /></figure>
            <div className="flex justify-around w-full">
                <div>
                <h2 className="card-title">{name}</h2>
                <p>Supplier: {supplier}</p>
                <p>Quantity: {quantity}</p>
                </div>
                

                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-2">
                        <button className="btn btn-active">View</button>
                        <button className="btn">Edit</button>
                        <button onClick={() => handleDelete(_id)} className="btn">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;