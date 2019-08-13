import React, { useEffect, useState } from "react";

const Uppy = require("uppy/lib/core");
const DashboardModal = require("uppy/lib/react/DashboardModal");
const Tus = require("uppy/lib/plugins/Tus");

const DropArea = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleUploadModalOpen = () => setModalOpen(true);
  const handleUploadModalClose = () => setModalOpen(false);

  useEffect(() => {
    return Uppy.close();
  }, []);
};
