// import React, { createContext, useState, useMemo } from "react";
//
// // Create Context object.
// export const usebookcontext = createContext<BookContextType | null>(null);
// interface Props {
//   children: React.ReactNode;
// }
//
// // Create a provider for components to consume and subscribe to changes.
// export const BookContextProvider = ({ children }: Props) => {
//   const [selectedCollege, setSelectedCollege] = useState("");
//   const [selectedDepartment, setSelectedDepartment] = useState("");
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [formattedPrice, setFormattedPrice] = useState("");
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [bookName, setBookName] = useState("");
//   const [publisher, setPublisher] = useState("");
//   const [bookStatus, setBookStatus] = useState("");
//   const [isUnderlinedOrWrite, setIsUnderlinedOrWrite] = useState(false);
//   const [isDiscolorationAndDamage, setIsDiscolorationAndDamage] =
//     useState(false);
//   const [isCoverDamaged, setIsCoverDamaged] = useState(false);
//
//   const value = useMemo(
//     () => ({
//       selectedCollege,
//       setSelectedCollege,
//       selectedDepartment,
//       setSelectedDepartment,
//       selectedFiles,
//       setSelectedFiles,
//       formattedPrice,
//       setFormattedPrice,
//       selectedDate,
//       setSelectedDate,
//     }),
//     [
//       selectedCollege,
//       selectedDepartment,
//       selectedFiles,
//       formattedPrice,
//       selectedDate,
//     ],
//   );
//   return (
//     <usebookcontext.Provider value={value}>{children}</usebookcontext.Provider>
//   );
// };
