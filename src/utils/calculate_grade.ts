/**
 * This file contains some function stubs(ie incomplete functions) that
 * you MUST use to begin the work for calculating the grades.
 *
 * You may need more functions than are currently here...we highly encourage you to define more.
 *
 * Anything that has a type of "undefined" you will need to replace with something.
 */
import {IDisplayDataClass } from "../types/api_types";
import { BASE_API_URL } from "../globals";
import axios from 'axios';

/**
 * This function might help you write the function below.
 * It retrieves the final grade for a single student based on the passed params.
 * 
 * If you are reading here and you haven't read the top of the file...go back.
 */
// export async function calculateStudentFinalGrade(
//   studentID: string,
//   classAssignments: IAssignmmentsDetails[],
//   klass: IUniversityClass
// ): Promise<{ studentID: string, score: number, name: string }> {
//   const response = await axios.get(BASE_API_URL + 'student/listGrades/' + studentID + '/' + klass.classId, {
//     headers: GET_DEFAULT_HEADERS_AXIOS(),
//     params: { 'buid': MY_BU_ID }
//   });
//   const student = await response;
//   let score = 0.0;

//   let mapOfAssignment = new Map();
//   for (var a of classAssignments) {
//     mapOfAssignment.set(a.assignmentId, a.weight);
//   }
//   var grades: any = Object.entries(student.data.grades[0]);
//   for (var key of grades) {
//     score += mapOfAssignment.get(key[0]) * key[1];
//   }
//   score /= 100.0;
//   console.log(score);
//   let name = student.data.name;
//   console.log({ studentID, score, name })
//   return { studentID, score, name };

// }


/**
 * You need to write this function! You might want to write more functions to make the code easier to read as well.
 * 
 *  If you are reading here and you haven't read the top of the file...go back.
 * 
 * @param classID The ID of the class for which we want to calculate the final grades
 * @returns Some data structure that has a list of each student and their final grade.
 */
// export async function calcAllFinalGrade(klass: IUniversityClass): Promise<IDisplayDataClass[]> {
//   console.log("calcAllFinalGrade");
//   let data: IDisplayDataClass[] = []
//   var assignmentsDetails: IAssignmmentsDetails[] = [];
//   var studentIdList: string[] = [];
//   const res=axios.get(BASE_API_URL + 'class/listAssignments/' + klass.classId, {
//     headers: GET_DEFAULT_HEADERS_AXIOS(),
//     params: { 'buid': MY_BU_ID }
//   });
//   assignmentsDetails= await (await res).data;
  
//   const response = await axios.get(BASE_API_URL + 'class/listStudents/' + klass.classId, {
//     headers: GET_DEFAULT_HEADERS_AXIOS(),
//     params: { 'buid': MY_BU_ID }
//   });
//   studentIdList = await (await response).data;
//   // console.log(studentIdList);
//   let studentsScore: { studentID: string, score: number, name: string }[] = [];

//   for (let i = 0; i < studentIdList.length; i++) {
//     let ans = await calculateStudentFinalGrade(studentIdList[i], assignmentsDetails, klass);
//     studentsScore.push(ans);
//     console.log(studentsScore.length);
//   }

//   for (let i = 0; i < studentsScore.length; i++) {
//     let d = {} as IDisplayDataClass;
//     d.Shipping_PO = klass.classId;
//     d.Date = studentsScore[i].studentID;
//     d.Warehouse_ID = studentsScore[i].name;
//     d.semester = "fall2022";
//     d.Shipment_ID = klass.title;
//     d.finalGrade = studentsScore[i].score;
//     data.push(d);
//   };
//   console.log(data.length);
//   return data;
// }


