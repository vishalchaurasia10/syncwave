import MediaPlayer from "./MediaPlayer";
import Chat from "./Chat";
import useSocketStore from "../../store/Socket";
import { useEffect } from "react";
import useRoomStore from "../../store/Room";
import { useParams } from "react-router-dom";

const RoomPage = () => {
    const { socket, createSocket, videoUrl, joinRoom } = useSocketStore();
    const { room, getRoomDetails, sendVideoUrl } = useRoomStore();
    const { roomId } = useParams();

    useEffect(() => {
        getRoomDetails(roomId); // Replace 'room-id' with the actual room ID
    }, []);

    useEffect(() => {
        if (room) {
            createSocket();
        }
    }, [room]);

    useEffect(() => {
        if (socket) {
            joinRoom(roomId);
        }
    }, [socket]);


    return (
        <div className="w-full relative h-screen flex flex-col md:flex-row md:justify-center pt-20 md:pt-16 font-poppins md:px-10">
            {room && <div className="player w-full md:w-[65%] mb-5 md:mb-0 p-3 md:p-5 space-y-4">
                <h1 className="text-5xl"><strong>{room.name}</strong></h1>
                <MediaPlayer url={videoUrl} roomId={roomId} sendVideoUrl={sendVideoUrl} />
                <div className="members">
                    <h1 className="text-2xl">Members</h1>
                    <ul className="flex space-x-4">
                        <li>Member 1</li>
                        <li>Member 2</li>
                        <li>Member 3</li>
                    </ul>
                </div>
            </div>}

            <div className="chatwrapper sticky top-16 h-[46%] md:h-full right-4 w-full md:w-[35%] flex p-2 md:p-0">
                <div className="chats w-full flex flex-col border-2 border-gray-300 rounded-xl md:m-4 p-1 relative">
                    {/* Tabs */}
                    <div role="tablist" className="tabs tabs-boxed">
                        <a role="tab" className="tab tab-active">Chats</a>
                        <a role="tab" className="tab">History</a>
                    </div>

                    {/* Chat box should flex to fill available space */}
                    <div className="flex-1 overflow-hidden">
                        <Chat />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomPage;
