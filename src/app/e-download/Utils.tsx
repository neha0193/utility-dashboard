import Card from "./Card";
import { VscVscode } from "react-icons/vsc";
import {
  FaDiscord,
  FaSteam,
  FaOpera,
  FaEdge,
  FaGitAlt,
  FaSkype,
} from "react-icons/fa";
import { FaBrave } from "react-icons/fa6";
import {
  SiGooglechrome,
  SiValorant,
  SiEpicgames,
  SiPycharm,
} from "react-icons/si";
import { TbBrandZoom } from "react-icons/tb";

export default function Utilities() {
  return (
    <div className="w-full space-y-12">
      {/* Games */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
          Games
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card
            children={<SiValorant className="text-pink-500 text-3xl" />}
            text="Valorant"
            url="https://valorant.secure.dyn.riotcdn.net/channels/public/x/installer/current/live.live.eu.exe"
          />
          <Card
            children={<FaSteam className="text-blue-400 text-3xl" />}
            text="Steam"
            url="https://cdn.fastly.steamstatic.com/client/installer/SteamSetup.exe"
          />
          <Card
            children={<SiEpicgames className="text-gray-200 text-3xl" />}
            text="Epic Games"
            url="https://epicgames-download1.akamaized.net/Builds/UnrealEngineLauncher/Installers/Win32/EpicInstaller-17.2.0.msi"
          />
          <Card
            children={<FaDiscord className="text-indigo-400 text-3xl" />}
            text="Discord"
            url="https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x64"
          />
        </div>
      </div>

      {/* Browser */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
          Browsers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card
            children={<SiGooglechrome className="text-red-400 text-3xl" />}
            text="Google Chrome"
            url="https://dl.google.com/.../ChromeSetup.exe"
          />
          <Card
            children={<FaBrave className="text-orange-400 text-3xl" />}
            text="Brave"
            url="https://laptop-updates.brave.com/download/BRV010?bitness=64"
          />
          <Card
            children={<FaOpera className="text-pink-400 text-3xl" />}
            text="Opera"
            url="https://net.geo.opera.com/opera/stable/windows"
          />
          <Card
            children={<FaEdge className="text-blue-500 text-3xl" />}
            text="Edge"
            url="https://go.microsoft.com/fwlink/?linkid=2109047"
          />
        </div>
      </div>

      {/* Developer Tools */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
          Developer Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card
            children={<VscVscode className="text-blue-400 text-3xl" />}
            text="Visual Studio Code"
            url="https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user"
          />
          <Card
            children={<FaGitAlt className="text-red-500 text-3xl" />}
            text="Git"
            url="https://github.com/git-for-windows/git/releases/download/v2.47.1.windows.1/Git-2.47.1-64-bit.exe"
          />
          <Card
            children={<SiPycharm className="text-green-400 text-3xl" />}
            text="PyCharm"
            url="https://d29n1vtx0mqj8k.cloudfront.net/QGao7i8srx4V.exe"
          />
        </div>
      </div>

      {/* Messaging */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
          Messaging
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <Card
            children={<TbBrandZoom className="text-blue-300 text-3xl" />}
            text="Zoom"
            url="https://cdn.zoom.us/prod/6.3.1.53598/x64/ZoomInstallerFull.exe"
          />
          <Card
            children={<FaSkype className="text-sky-400 text-3xl" />}
            text="Skype"
            url="https://download.skype.com/s4l/download/win/Skype-8.134.0.202.exe"
          />
        </div>
      </div>
    </div>
  );
}
