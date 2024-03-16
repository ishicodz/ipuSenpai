import {Switch} from "@mui/material";
import {StudentResults} from "@/types/types";
import React from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Drawer, DrawerContent} from "@/components/ui/drawer";

export function StudentDataDialog(
    {
        studentData,
        setStudentData
    }: {
        studentData: {open: boolean; data: StudentResults;},
        setStudentData: React.Dispatch<React.SetStateAction<{open: boolean; data: StudentResults;}>>,
    }
) {


    return (
        <Drawer
            open={studentData.open}
            onOpenChange={(open)=> setStudentData(prevState =>
                ({...prevState, open: open}))}
        >
            <DrawerContent>
                <div className="max-w-4xl mx-auto p-6 shadow rounded">
                    <div className="flex flex-col space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="font-semibold">
                                    Enrollment Number: <span
                                    className="font-normal">{studentData.data.enrollment}</span>
                                </p>
                                <p className="font-semibold">
                                    Name: <span className="font-normal">{studentData.data.name}</span>
                                </p>
                                <p className="font-semibold">
                                    Marks: <span
                                    className="font-normal">{studentData.data.marks} / {studentData.data.total}</span>
                                </p>
                                <p className="font-semibold">
                                    Credit Marks: <span
                                    className="font-normal">{studentData.data.creditMarks} / {studentData.data.totalCreditMarks}</span>
                                </p>
                                {/*<p className="font-semibold">*/}
                                {/*    CGPA: <span className="font-normal">9.184</span>*/}
                                {/*</p>*/}
                                {/*<p className="font-semibold">*/}
                                {/*    Credits Obtained: <span className="font-normal">{studentData.data.totalCreditMarksWeighted} / {studentData.data.totalCredits}</span>*/}
                                {/*</p>*/}
                            </div>
                            <div>
                                <p className="font-semibold">
                                    Percentage: <span
                                    className="font-normal">{studentData.data.percentage.toFixed(2)} %</span>
                                </p>
                                <p className="font-semibold">
                                    Credit Percentage: <span
                                    className="font-normal">{studentData.data.creditsPercentage.toFixed(2)} %</span>
                                </p>
                                {/*<p className="font-semibold">*/}
                                {/*    Equivalent Percentage: <span className="font-normal">{studentData.data.per} %</span>*/}
                                {/*</p>*/}
                                <p className="font-semibold">
                                    Rank: <span className="font-normal">#{studentData.data.rank}</span>
                                </p>
                            </div>
                        </div>
                        <hr/>
                        <div className="flex items-center justify-between">
                            <Button variant="outline">Show credit marks and credit percentage</Button>
                            <Switch id="toggle-details"/>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Semester</TableHead>
                                    <TableHead>Marks</TableHead>
                                    <TableHead>Percentage</TableHead>
                                    <TableHead>SGPA</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Sem 1</TableCell>
                                    <TableCell>932 / 1100</TableCell>
                                    <TableCell>84.727 %</TableCell>
                                    <TableCell>9.080</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Sem 2</TableCell>
                                    <TableCell>935 / 1100</TableCell>
                                    <TableCell>85.000 %</TableCell>
                                    <TableCell>9.280</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Sem 3</TableCell>
                                    <TableCell>876 / 1000</TableCell>
                                    <TableCell>87.600 %</TableCell>
                                    <TableCell>9.192</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Sem 4</TableCell>
                                    <TableCell>0 / 0</TableCell>
                                    <TableCell>0.000 %</TableCell>
                                    <TableCell>0.000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Sem 5</TableCell>
                                    <TableCell>0 / 0</TableCell>
                                    <TableCell>0.000 %</TableCell>
                                    <TableCell>0.000</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}