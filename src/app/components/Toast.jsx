"use client";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Toast = ({
  start,
  end,
  center,
  bottom,
  middle,
  top,
  alerts,
  duration,
}) => {
  const [open, setOpen] = useState(false);
  const [alt, setAlt] = useState([]);
  useEffect(() => {
    if (alerts) {
      setAlt([...alerts]);
      setOpen(true);
      const timeout = setTimeout(() => {
        setOpen(false);
        alt.splice(0, alt.length);
      }, duration);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [alerts]);

  const ToastItem = ({ alerts }) => {
    console.log(`alerts -> ${alerts}`);
    return alerts.map((alert, index) => (
      <div
        key={index}
        className="alert alert-error text-white "
      >
        <span>{alert}</span>
      </div>
    ));
  };

  return (
    <div
      className={`toast z-50 ${
        start
          ? "toast-start"
          : end
          ? "toast-end"
          : center
          ? "toast-center"
          : bottom
          ? "toast-bottom"
          : middle
          ? "toast-middle"
          : top && "toast-top"
      }`}
    >
      {open && <ToastItem alerts={alt} />}
    </div>
  );
};

Toast.propTypes = {
  start: PropTypes.bool,
  end: PropTypes.bool,
  center: PropTypes.bool,
  bottom: PropTypes.bool,
  middle: PropTypes.bool,
  top: PropTypes.bool,
  alerts: PropTypes.array,
};

export default Toast;
