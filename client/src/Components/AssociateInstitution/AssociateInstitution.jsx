import Institute from "./Institute";

const AssociateInstitution = () =>{
    return(

        <div className="">
            <h1 className="text-white text-center text-2xl font-semibold tracking-wide py-16">ASSOCIATED INSTITUTION</h1>
        <div className="flex justify-center mb-16  space-x-8">

            <Institute />
            <Institute />
            <Institute />
            <Institute />
        </div>
        <hr className='h-2 w-full mb-[5%] mt-[10%]'/>

        </div>

    )
}

export default AssociateInstitution;