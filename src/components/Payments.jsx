import React, { useState } from "react";
import Airtime from "../../public/viber.png";
import Data from "../../public/internet.png";
import Electricity from "../../public/backup.png";
import Cable from "../../public/smart-tv.png";
import Water from "../../public/water-tap.png";
import States from "../../public/governament.png";
import Bills from "../../public/invoice-two.png";
import Tax from "../../public/tax.png";
import Folder from "../../public/folder.png";
import Invoice from "../../public/invoice.png";
import Debit from "../../public/credit-card.png";
import Waec from "../../public/payment.png";
import { ArrowRightAltSharp, CloseSharp } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { Box, Modal, Typography } from "@mui/material";
import Mtn from "../../public/mtn.png";
import Glo from "../../public/glo.png";
import Airtel from "../../public/airtel.png";
import Gmobile from "../../public/9mobile.png";
import Smile from "../../public/smile.png";
import Tizeti from "../../public/tizeti.png";
import Disco from "../../public/disco.svg";
import Dstv from "../../public/dstvsub.png";
import Gotv from "../../public/gotvsub.png";
import Startimes from "../../public/startimessub.png";

function Payments() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openData, setOpenData] = useState(false);
  const handleOpenData = () => setOpenData(true);
  const handleCloseData = () => setOpenData(false);
  const [openElectricity, setOpenElectricity] = useState(false);
  const handleOpenElectricity = () => setOpenElectricity(true);
  const handleCloseElectricity = () => setOpenElectricity(false);
  const [openCable, setOpenCable] = useState(false);
  const handleOpenCable = () => setOpenCable(true);
  const handleCloseCable = () => setOpenCable(false);
  const [openState, setOpenState] = useState(false);
  const handleOpenState = () => setOpenState(true);
  const handleCloseState = () => setOpenState(false);
  const [openBills, setOpenBills] = useState(false);
  const handleOpenBills = () => setOpenBills(true);
  const handleCloseBills = () => setOpenBills(false);
  const [openTax, setOpenTax] = useState(false);
  const handleOpenTax = () => setOpenTax(true);
  const handleCloseTax = () => setOpenTax(false);
  const [openSalary, setOpenSalary] = useState(false);
  const handleOpenSalary = () => setOpenSalary(true);
  const handleCloseSalary = () => setOpenSalary(false);
  return (
    <div className="bg-[#f1f1f1] px-[6%] py-[5%]">
      <>
        {/* Airtime Popup */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-10 bg-white w-[95%] md:w-[500px] md:mx-0 rounded-md">
            <div className="flex flex-row justify-between items-center">
              <Typography
                id="modal-modal-title"
                className="text-[#2B3674] text-[12px] md:text-[18px] capitalize"
                variant="h6"
                component="h2"
              >
                Please select your TELCO provider
              </Typography>
              <CloseSharp
                onClick={handleClose}
                sx={{ color: "gray", fontSize: 28, cursor: "pointer" }}
              />
            </div>
            <div className="mt-5">
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Mtn} alt="MTN" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">MTN</p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Glo} alt="Glo" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">GLO</p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Airtel} alt="Airtel" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">AIRTEL</p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Gmobile} alt="9mobile" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">gMOBILE</p>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        {/* Data popup */}
        <Modal
          open={openData}
          onClose={handleCloseData}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-10 bg-white w-[95%] md:w-[500px] rounded-md h-[500px] overflow-y-auto">
            <div className="flex flex-row justify-between items-center">
              <Typography
                id="modal-modal-title"
                className="text-[#2B3674] text-[12px] md:text-[18px] capitalize"
                variant="h6"
                component="h2"
              >
                Please select your TELCO provider
              </Typography>
              <CloseSharp
                onClick={handleCloseData}
                sx={{ color: "gray", fontSize: 28, cursor: "pointer" }}
              />
            </div>
            <div className="mt-5">
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Mtn} alt="MTN" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">MTN</p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Glo} alt="Glo" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">GLO</p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Airtel} alt="Airtel" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">AIRTEL</p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Gmobile} alt="9mobile" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">gMOBILE</p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Smile} alt="Smile" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">SMILE</p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Tizeti} alt="Tizeti" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">TIZETI</p>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        {/* Electricity Popup */}
        <Modal
          open={openElectricity}
          onClose={handleCloseElectricity}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-10 bg-white w-[95%] md:w-[700px] rounded-md h-[500px] overflow-y-auto">
            <div className="flex flex-row justify-between items-center">
              <Typography
                id="modal-modal-title"
                className="text-[#2B3674] text-[12px] md:text-[18px] capitalize"
                variant="h6"
                component="h2"
              >
                Please select your DISCO provider
              </Typography>
              <CloseSharp
                onClick={handleCloseElectricity}
                sx={{ color: "gray", fontSize: 28, cursor: "pointer" }}
              />
            </div>
            <div className="mt-5">
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Disco} alt="Meter" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">BUY METER</p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Disco} alt="Abuja Elect" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">
                    ABUJA ELECTRICITY DISTRIBUTION COMPANY (AEDC)
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Disco} alt="Disco" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">
                    EKO ELECTRICITY DISTRIBUTION PLC
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Disco} alt="Disco" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">
                    ENUGU ELECTRICITY DISTRIBUTION COMPANY (EEDC)
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Disco} alt="Disco" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">IKEJA ELECTRIC</p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Disco} alt="Disco" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">
                    IBADAN ELECTRICITY DISTRIBUTION COMPANY (IBEDC)
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Disco} alt="Disco" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">
                    JOS ELECTRICITY DISTRIBUTION COMPANY
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Disco} alt="Disco" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">
                    KADUNA ELECTRICITY DISTRIBUTION COMPANY (KEDCO)
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Disco} alt="Disco" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">
                    KANO ELECTRICITY DISTRIBUTION COMPANY (KEDCO)
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Disco} alt="Disco" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">
                    PORT HARCOURT ELECTRICITY DISTRIBUTION COMPANY (PHED)
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Disco} alt="Disco" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">
                    RCCG ELECTRICAL POWER DEPARTMENT
                  </p>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        {/* Cable TV popup */}
        <Modal
          open={openCable}
          onClose={handleCloseCable}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-10 bg-white w-[95%] md:w-[500px] rounded-md">
            <div className="flex flex-row justify-between items-center">
              <Typography
                id="modal-modal-title"
                className="text-[#2B3674] text-[12px] md:text-[18px] capitalize"
                variant="h6"
                component="h2"
              >
                Please select your CABLE provider
              </Typography>
              <CloseSharp
                onClick={handleCloseCable}
                sx={{ color: "gray", fontSize: 28, cursor: "pointer" }}
              />
            </div>
            <div className="mt-5">
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Dstv} alt="DSTV" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">DSTV</p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Gotv} alt="Gotv" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">GOTV</p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Startimes} alt="Startimes" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">STARTIMES</p>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        {/* FGN & States popup */}
        <Modal
          open={openState}
          onClose={handleCloseState}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-10 bg-white w-[95%] md:w-[500px] rounded-md h-[500px] overflow-y-auto">
            <div className="flex flex-row justify-between items-center">
              <Typography
                id="modal-modal-title"
                className="text-[#2B3674] text-[12px] md:text-[18px] capitalize"
                variant="h6"
                component="h2"
              >
                Pay FGN and State TSA
              </Typography>
              <CloseSharp
                onClick={handleCloseState}
                sx={{ color: "gray", fontSize: 28, cursor: "pointer" }}
              />
            </div>
            <div className="mt-5">
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    FGN: Federal Government Of Nigeria
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    ADAMAWA STATE GOVERNMENT
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    ANAMBRA STATE GOVERNMENT
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    BAUCHI STATE GOVERNMENT
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    BENUE STATE GOVERNMENT
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    BORNO STATE GOVERNMENT
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    DELTA STATE JUDICIARY
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    EKITI STATE GOVERNMENT
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    ENUGU STATE GOVERNMENT
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    FEDERAL CAPITAL TERRITORY ADMIN
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    GOMBE STATE GOVERNMENT
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    IMO STATE INTERNAL REVENUE
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    JIGAWA STATE GOVERNMENT
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    KADUNA STATE GOVERNMENT TSA
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    KANO STATE GOVERNMENT
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    KOGI STATE GOVERNMENT
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    KWARA STATE GOVERNMENT
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    LAGOS STATE GOVERNMENT
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    LAGOS STATE MODEL COLLEGES AND UPGRADED SCHOOLS
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    NASARAWA STATE GOVERNMENT
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    NIGER STATE GOVERNMENT
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    NNPC Limited (NNPC)
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    PLATEAU STATE GOVERNMENT
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    SOKOTO STATE GOVERNMENT
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    YOBE STATE GOVERNMENT
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    ZAMFARA STATE GOVERNMENT
                  </p>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        {/* Bills Popup */}
        <Modal
          open={openBills}
          onClose={handleCloseBills}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-10 bg-white w-[95%] md:w-[500px] rounded-md">
            <div className="flex flex-row justify-between items-center">
              <Typography
                id="modal-modal-title"
                className="text-[#2B3674] text-[12px] md:text-[18px] capitalize"
                variant="h6"
                component="h2"
              >
                Bills & Purchases
              </Typography>
              <CloseSharp
                onClick={handleCloseBills}
                sx={{ color: "gray", fontSize: 28, cursor: "pointer" }}
              />
            </div>
            <div className="mt-5">
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Bills} alt="MTN" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">PAY BILLERS</p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Invoice} alt="Glo" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">PAY RRR INVOICE</p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Debit} alt="Airtel" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">MICRO PENSION</p>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        {/* Tax popup */}
        <Modal
          open={openTax}
          onClose={handleCloseTax}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-10 bg-white w-[95%] md:w-[500px] rounded-md h-[500px] overflow-y-auto">
            <div className="flex flex-row justify-between items-center">
              <Typography
                id="modal-modal-title"
                className="text-[#2B3674] text-[12px] md:text-[18px] capitalize"
                variant="h6"
                component="h2"
              >
                Pay Taxes
              </Typography>
              <CloseSharp
                onClick={handleCloseTax}
                sx={{ color: "gray", fontSize: 28, cursor: "pointer" }}
              />
            </div>
            <div className="mt-5">
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Abia State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Adamawa State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Akwaibom State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Anambra State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Bauchi State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Bayelsa State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Benue State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Borno State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Cross River State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Delta State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Ebonyi State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Edo State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Ekiti State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Enugu State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Federal Capital Territory Internal Revenue Service (FCTIRS)
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Federal Inland Revenue Service (FIRS)
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Gombe State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Imo State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Jigawa State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Kaduna State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Kano State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Katsina State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Kebbi State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Kogi State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Kwara State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Lagos State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Nassarawa State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Niger State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Ogun State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Ondo State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Osun State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Oyo State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Plateau State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Rivers State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Sokoto State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Taraba State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Yobe State Internal Revenue Service
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <p className="text-[18px] text-gray-500">
                    Zamfara State Internal Revenue Service
                  </p>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        {/* Salary popup */}
        <Modal
          open={openSalary}
          onClose={handleCloseSalary}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-10 bg-white w-[95%] md:w-[500px] rounded-md">
            <div className="flex flex-row justify-between items-center">
              <Typography
                id="modal-modal-title"
                className="text-[#2B3674] text-[12px] md:text-[18px] capitalize"
                variant="h6"
                component="h2"
              >
                Pay Salaries & Satutories
              </Typography>
              <CloseSharp
                onClick={handleCloseSalary}
                sx={{ color: "gray", fontSize: 28, cursor: "pointer" }}
              />
            </div>
            <div className="mt-5">
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Folder} alt="DSTV" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">Pay Salaries</p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Folder} alt="Gotv" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">
                    Upload Pension Schedule
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-5 border-gray-400 border rounded-md p-3 items-center cursor-pointer hover:bg-gray-100 mt-4">
                <div>
                  <Image src={Folder} alt="Startimes" />
                </div>
                <div>
                  <p className="text-[18px] text-gray-500">
                    Upload NHF Schedule
                  </p>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <div className="py-0 px-4 flex flex-col md:flex-row justify-between items-center text-center mt-[0%] md:mt-[0%]">
          <div className="flex flex-col w-[100%] pl-[0%] md:mt-0 mt-10 ">
            <div className="flex flex-row flex-wrap gap-5 mt-5 justify-between">
              <div
                className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[185px]"
                onClick={handleOpen}
              >
                <Image
                  src={Airtime}
                  alt="airtime"
                  className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
                />
                <p className="text-black text-center font-semibold text-[14px]">
                  Buy Airtime
                </p>
              </div>
              <div
                className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[185px]"
                onClick={handleOpenData}
              >
                <Image
                  src={Data}
                  alt="airtime"
                  className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
                />
                <p className="text-black text-center font-semibold text-[14px]">
                  Buy Data
                </p>
              </div>
              <div
                className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[185px]"
                onClick={handleOpenElectricity}
              >
                <Image
                  src={Electricity}
                  alt="airtime"
                  className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
                />
                <p className="text-black text-center font-semibold text-[14px]">
                  Buy Electricity
                </p>
              </div>
              <div
                className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[185px]"
                onClick={handleOpenCable}
              >
                <Image
                  src={Cable}
                  alt="airtime"
                  className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
                />
                <p className="text-black text-center font-semibold text-[14px]">
                  Cable TV
                </p>
              </div>
              <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[185px]">
                <Image
                  src={Water}
                  alt="airtime"
                  className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
                />
                <p className="text-black text-center font-semibold text-[14px]">
                  Pay Water
                </p>
              </div>
              <div
                className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[185px]"
                onClick={handleOpenState}
              >
                <Image
                  src={States}
                  alt="airtime"
                  className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
                />
                <p className="text-black text-center font-semibold text-[14px]">
                  Pay TSA & States
                </p>
              </div>
              <div
                className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[185px]"
                onClick={handleOpenBills}
              >
                <Image
                  src={Bills}
                  alt="airtime"
                  className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
                />
                <p className="text-black text-center font-semibold text-[14px]">
                  Bills & Purchases
                </p>
              </div>
              <div
                className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[185px]"
                onClick={handleOpenTax}
              >
                <Image
                  src={Tax}
                  alt="airtime"
                  className="h-13 w-13 bg-white p-4 rounded-full shadow-md object-contain"
                />
                <p className="text-black text-center font-semibold text-[14px]">
                  Pay Taxes
                </p>
              </div>
              <div
                className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[185px]"
                onClick={handleOpenSalary}
              >
                <Image
                  src={Folder}
                  alt="airtime"
                  className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
                />
                <p className="text-black text-center font-semibold text-[14px]">
                  Pay Salaries
                </p>
              </div>
              <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[185px]">
                <Image
                  src={Invoice}
                  alt="airtime"
                  className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
                />
                <p className="text-black text-center font-semibold text-[14px]">
                  Resend Invoice
                </p>
              </div>
              <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[185px]">
                <Image
                  src={Debit}
                  alt="airtime"
                  className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
                />
                <p className="text-black text-center font-semibold text-[14px]">
                  Direct Debits
                </p>
              </div>
              <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[185px]">
                <Image
                  src={Waec}
                  alt="airtime"
                  className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
                />
                <p className="text-black text-center font-semibold text-[14px]">
                  Buy WAEC PIN
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Payments;
