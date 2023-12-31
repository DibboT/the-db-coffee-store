import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })

        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Sucess',
                    text: 'User Added Sucessfully',
                    icon: 'sucess',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
      
        <div className="bg-[#F4F3F0] p-10 w-1/2 mx-auto ">
            <h2 className="text-center mb-4 text-3xl font-bold">Add Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/*Form Row: Coffee Name And Quantity */}
                <div className="flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label text">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/*Form Row: Supplier And Taste */}
                <div className="flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label text">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/*Form Row: Category and Details */}
                <div className="flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label text">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/*Form Row: Photo Url */}
                <div className="flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label text">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block btn-primary" />
            </form>
        </div>
    );
};

export default AddCoffee;