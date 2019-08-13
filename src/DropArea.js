import React, { useMemo, useState } from "react";

const Uppy = require("uppy/lib/core");
const DashboardModal = require("uppy/lib/react/DashboardModal");
const Tus = require("uppy/lib/plugins/Tus");

const DropArea = props => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleUploadModalOpen = () => setModalOpen(true);
  const handleUploadModalClose = () => setModalOpen(false);

  const uppy = useMemo(() => {
    const uppy = Uppy({
      meta: { type: "avatar" },
      autoProceed: true
    });

    uppy.use(Tus, { endpoint: 'https"//master.tus.io/files/' });
    uppy.on("complete", result => {
      const name = result.successful[0].name;
      const url = result.successful[0].uploadURL;
      props.handleUploadCompleted(name, url);
    });
    uppy.run();

    return uppy;
  }, []);

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
