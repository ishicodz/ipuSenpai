import {Button} from "@/components/ui/button"
import {getInstitutes, getProgrammes} from "@/app/lib/ranklist";
import Programmes from "@/components/ranklist/Programmes";


export default async function Page() {

    const programmes = await getProgrammes();

    return (
        <form>
            <div className="bg-[#1a202c] p-[2rem] shadow-md rounded-lg max-w-[72rem] mx-auto my-8">
                <h1 className="text-4xl font-semibold text-white mb-6">University Ranklist</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-6">
                    <Programmes programmes={programmes} />
                    <Button className="bg-[#38a169] text-white md:col-span-1">Search</Button>
                </div>
            </div>
        </form>
    )
}

