import CreateRoomForm from "./create-room-form";

const CreateRoomPage = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 mt-12 mb-24">
      <h1 className="text-4xl font-bold">Create Room</h1>
      <CreateRoomForm />
    </div>
  );
};

export default CreateRoomPage;
