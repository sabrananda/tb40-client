"use client";
import Identity from "./identitas";
import Result40 from "./result40";
import ColorMean from "./colorMean";
import StrongAndWeak from "./strongnweak";
import Chart from "./chart";
import Kepribadian from "./kepribadian";
import Bakat from "./bakat";
import BahasaHati from "./bahasaHati";
import GayaBelajar from "./gayaBelajar";
import SifatTercela from "./sifatTercela";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { homeState } from "@/states/homeState";
import ResultAction from "./resultAction";
import { resultPageStates } from "@/states/resultPageStates";

export default function ResultPage() {
  const router = useRouter();
  const [setNama] = homeState((state) => [state.setNama]);
  const [ranks40] = resultPageStates((state) => [state.ranks40]);

  useEffect(() => {
    if (ranks40.length < 1) {
      router.push("/");
    }
  }, [ranks40, router, setNama]);

  return (
    <div className="flex justify-center m-2">
      {/* tengah halaman */}
      <div className="w-[19cm]">
        <ResultAction />
        <div className="print:h-[27.5cm]">
          <Identity />
        </div>
        <div className="print:h-[27.7cm]">
          <Result40 />
          <ColorMean />
        </div>
        <div className="print:h-[27.7cm] print:flex-col print:space-y-10">
          <StrongAndWeak />
          <Chart />
        </div>
        <div className="print:h-[110.8cm] flex-col space-y-10 border p-2">
          <Kepribadian />
          <Bakat />
        </div>
        <div className="print:h-[27.7cm] flex-col space-y-10 border p-2">
          <GayaBelajar />
        </div>
        <div className=" flex-col space-y-10 border p-2">
          <BahasaHati />
          <SifatTercela />
        </div>
      </div>
    </div>
  );
}
