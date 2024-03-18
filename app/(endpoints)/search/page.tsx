"use client"

import {PreBuiltSelect} from "@/components/ui/select"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import React, {useEffect, useRef, useState} from "react";
import {RanklistQueryFields, SearchSelectDataFields, StudentSearchCard} from "@/types/types";
import {isMobile} from "@/app/lib/actions";
import {getAllInstitutes, getProgrammes, getSearchByStudentResult} from "@/app/lib/dataFetch";
import {batches} from "@/app/lib/data";
import {useLoader} from "@/app/lib/LoaderContext";

export default function Page() {
    const loader = useLoader();
    const [selectedData, setSelectedData] = useState<SearchSelectDataFields>({
        programme: "",
        institute: "",
        batch: "",
        name: "",
    })
    const [programmes, setProgrammes] = useState<RanklistQueryFields[]>([]);
    const [institutes, setInstitutes] = useState<RanklistQueryFields[]>([]);
    const [resultData, setResultData] = useState<StudentSearchCard[]>([]);
    const is_mobile = useRef<boolean>(false);

    useEffect(() => {
        isMobile()
            .then(value => {
                is_mobile.current = value;
            })
    }, []);

    useEffect(() => {
        const fetchProgrammes = async () => {
            setProgrammes(await getProgrammes());
            setInstitutes(await getAllInstitutes());
        }
        fetchProgrammes();
    }, []);

    const handleResultFetch = async () => {
        const resData = await getSearchByStudentResult(selectedData);
        if (resData.length > 0) {
            loader.inactiveLoader();
        }

        setResultData(resData);
    }

    return (
        <>
            <form className="lg:px-10" onSubmit={async (e) => {
                e.preventDefault();
                loader.activeLoader();
                await handleResultFetch();
            }}>
                <div className="rounded-lg mx-4 md:mx-10">
                    <h1 className="text-4xl font-semibold mb-6">Ranklist</h1>
                    <div className="grid grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-6">
                        <PreBuiltSelect<SearchSelectDataFields>
                            name={"programme"}
                            values={programmes}
                            valueState={selectedData.programme}
                            setValueState={setSelectedData}
                            disabled={false}
                            is_mobile={is_mobile.current}
                        />
                        <PreBuiltSelect<SearchSelectDataFields>
                            name={"institute"}
                            values={institutes}
                            valueState={selectedData.institute}
                            setValueState={setSelectedData}
                            disabled={institutes.length === 0}
                            is_mobile={is_mobile.current}
                        />
                        <PreBuiltSelect<SearchSelectDataFields>
                            name={"batch"}
                            values={batches}
                            valueState={selectedData.batch}
                            setValueState={setSelectedData}
                            disabled={batches.length === 0}
                            is_mobile={is_mobile.current}
                        />
                        <Input
                            value={selectedData.name}
                            className="w-full rounded-2xl"
                            type="text"
                            required
                            minLength={5}
                            placeholder="Enter student name"
                            onChange={e =>
                                setSelectedData(prevState =>
                                    ({...prevState, name: e.target.value})
                                )}
                        />
                        <Button
                            className="col-span-2 md:col-span-1 md:col-start-2 lg:col-start-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            variant={"outline"}
                            // disabled={Object.values(selectedData).some(i => i === "")}

                        >Search</Button>
                    </div>
                </div>
            </form>
        </>
    );
}