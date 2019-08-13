import React, { useEffect, useState } from "react";

const Uppy = require("uppy/lib/core");
const DashboardModal = require("uppy/lib/react/DashboardModal");
const Tus = require("uppy/lib/plugins/Tus");

const DropArea = props => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleUploadModalOpen = () => setModalOpen(true);
  const handleUploadModalClose = () => setModalOpen(false);

  useEffect(() => {
    return Uppy.close();
  }, []);

  const uppy = Uppy({
    meta: { type: "avatar" },
    autoProceed: true
  });

  uppy.use(Tus, { endpoint: 'https"//master.tus.io/files/' });
  uppy.on("complete", result => {
    const id = result.successful[0].id;
    const url = result.successful[0].uploadURL;
    props.handleUploadCompleted(id, url);
  });
  uppy.run();

  return (
    <div>
      <DashboardModal
        uppy={uppy}
        closeModalOnClickOutside
        open={modalOpen}
        onRequestClose={handleUploadModalClose}
      />
      <button onClick={handleUploadModalOpen}>Add new file</button>
    </div>
  );
};

export default DropArea;
