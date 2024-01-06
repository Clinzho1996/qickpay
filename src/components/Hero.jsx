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

function Hero() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openData, setOpenData] = useState(false);
  const handleOpenData = () => setOpenData(true);
  const handleCloseData = () => setOpenData(false);
  const [openElectricity, setOpenElectricity] = useState(false);
  const handleOpenElectricity = () => setOpenElectricity(true);
  const handleCloseElectricity = () => setOpenElectricity(false);
  return (
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
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-10 bg-white w-[95%] md:w-[500px] rounded-md">
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
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-10 bg-white w-[95%] md:w-[700px] rounded-md">
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
          </div>
        </Box>
      </Modal>
      <div
        className="p-10 flex flex-col md:flex-row justify-between items-center text-center mt-[-20%] md:mt-[-6%]"
        style={{
          background: " url('/hero_img.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          padding: "8% 6%",
        }}
      >
        <div className="flex justify-start flex-col pr-[0%] w-[100%] md:w-[65%] md:mt-0 mt-[100px]">
          <h2 className="text-black text-[42px] md:text-[53px] text-left leading-[53px]">
            <strong>Empower</strong> your <strong>Customers</strong> to pay you
            easily as you <strong>grow</strong>
          </h2>
          <Link href="/register" className="flex justify-start">
            <button className="bg-[#2B3674] text-white px-20 rounded-full py-4 mt-10 w-full md:w-[85%] hover:scale-110 transition-transform">
              Click to Sign Up <ArrowRightAltSharp />
            </button>
          </Link>
        </div>
        <div className="flex flex-col w-[100%] pl-[0%] md:mt-0 mt-10 md:pl-[10%]">
          <div>
            <input
              placeholder="Search here for a biller"
              className="p-3 w-full rounded-full border border-gray-400 text-black text-[14px] text-center"
            />
          </div>
          <div className="flex flex-row flex-wrap gap-5 mt-5 justify-between">
            <div
              className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]"
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
              className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]"
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
              className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]"
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
            <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
              <Image
                src={Cable}
                alt="airtime"
                className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
              />
              <p className="text-black text-center font-semibold text-[14px]">
                Cable TV
              </p>
            </div>
            <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
              <Image
                src={Water}
                alt="airtime"
                className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
              />
              <p className="text-black text-center font-semibold text-[14px]">
                Pay Water
              </p>
            </div>
            <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
              <Image
                src={States}
                alt="airtime"
                className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
              />
              <p className="text-black text-center font-semibold text-[14px]">
                Pay TSA & States
              </p>
            </div>
            <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
              <Image
                src={Bills}
                alt="airtime"
                className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
              />
              <p className="text-black text-center font-semibold text-[14px]">
                Bills & Purchases
              </p>
            </div>
            <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
              <Image
                src={Tax}
                alt="airtime"
                className="h-13 w-13 bg-white p-4 rounded-full shadow-md object-contain"
              />
              <p className="text-black text-center font-semibold text-[14px]">
                Pay Taxes
              </p>
            </div>
            <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
              <Image
                src={Folder}
                alt="airtime"
                className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
              />
              <p className="text-black text-center font-semibold text-[14px]">
                Pay Salaries
              </p>
            </div>
            <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
              <Image
                src={Invoice}
                alt="airtime"
                className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
              />
              <p className="text-black text-center font-semibold text-[14px]">
                Resend Invoice
              </p>
            </div>
            <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
              <Image
                src={Debit}
                alt="airtime"
                className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
              />
              <p className="text-black text-center font-semibold text-[14px]">
                Direct Debits
              </p>
            </div>
            <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
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
  );
}

export default Hero;
