// "use client";

// import React, { useState, useEffect } from "react";
// import { TextInput } from "@/app/components";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   useDisclosure,
// } from "@nextui-org/react";

// export const AuthForgotPasswordModal = () => {
//   const [value, setValue] = useState("");

//   const { isOpen, onOpen, onClose } = useDisclosure();

//   useEffect(() => {
//     onOpen(true);
//   }, []);

//   const handleChange = (event) => {
//     event.preventDefault;
//     setValue(event.target.value);
//   };

//   return (
//     <Modal
//       backdrop="blur"
//       placement="center"
//       isOpen={isOpen}
//       onClose={onClose}
//     >
//       <ModalContent>
//         {(onClose) => (
//           <>
//             <ModalHeader className="flex flex-col gap-1">
//               Lupa Password
//             </ModalHeader>
//             <ModalBody>
//               <TextInput
//                 id="forgotPw"
//                 name="forgotPw"
//                 type={"text"}
//                 placeholder="Masukkan email Anda..."
//                 onChange={handleChange}
//                 value={value}
//                 required
//               />
//             </ModalBody>
//             <ModalFooter>
//               <Button
//                 color="danger"
//                 variant="light"
//                 onPress={onClose}
//               >
//                 Close
//               </Button>
//               <Button color="primary" onPress={onClose}>
//                 Submit
//               </Button>
//             </ModalFooter>
//           </>
//         )}
//       </ModalContent>
//     </Modal>
//   );
// };

// export default AuthForgotPasswordModal;
