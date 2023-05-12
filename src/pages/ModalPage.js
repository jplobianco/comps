import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important aggrement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum
        neque nec ullamcorper bibendum. Nam sem turpis, congue id auctor vel,
        tristique sed erat. Nulla sagittis leo vitae bibendum dignissim. Ut
        vitae lacus ut dolor ornare malesuada. Phasellus pulvinar rutrum quam eu
        aliquet. Morbi sit amet diam at purus dictum suscipit ac nec nisl. Nulla
        quis justo feugiat, viverra ipsum sed, lacinia nibh. Praesent pretium
        sagittis interdum. Ut ut ante venenatis, rhoncus tellus vitae,
        sollicitudin purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum
        neque nec ullamcorper bibendum. Nam sem turpis, congue id auctor vel,
        tristique sed erat. Nulla sagittis leo vitae bibendum dignissim. Ut
        vitae lacus ut dolor ornare malesuada. Phasellus pulvinar rutrum quam eu
        aliquet. Morbi sit amet diam at purus dictum suscipit ac nec nisl. Nulla
        quis justo feugiat, viverra ipsum sed, lacinia nibh. Praesent pretium
        sagittis interdum. Ut ut ante venenatis, rhoncus tellus vitae,
        sollicitudin purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum
        neque nec ullamcorper bibendum. Nam sem turpis, congue id auctor vel,
        tristique sed erat. Nulla sagittis leo vitae bibendum dignissim. Ut
        vitae lacus ut dolor ornare malesuada. Phasellus pulvinar rutrum quam eu
        aliquet. Morbi sit amet diam at purus dictum suscipit ac nec nisl. Nulla
        quis justo feugiat, viverra ipsum sed, lacinia nibh. Praesent pretium
        sagittis interdum. Ut ut ante venenatis, rhoncus tellus vitae,
        sollicitudin purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum
        neque nec ullamcorper bibendum. Nam sem turpis, congue id auctor vel,
        tristique sed erat. Nulla sagittis leo vitae bibendum dignissim. Ut
        vitae lacus ut dolor ornare malesuada. Phasellus pulvinar rutrum quam eu
        aliquet. Morbi sit amet diam at purus dictum suscipit ac nec nisl. Nulla
        quis justo feugiat, viverra ipsum sed, lacinia nibh. Praesent pretium
        sagittis interdum. Ut ut ante venenatis, rhoncus tellus vitae,
        sollicitudin purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum
        neque nec ullamcorper bibendum. Nam sem turpis, congue id auctor vel,
        tristique sed erat. Nulla sagittis leo vitae bibendum dignissim. Ut
        vitae lacus ut dolor ornare malesuada. Phasellus pulvinar rutrum quam eu
        aliquet. Morbi sit amet diam at purus dictum suscipit ac nec nisl. Nulla
        quis justo feugiat, viverra ipsum sed, lacinia nibh. Praesent pretium
        sagittis interdum. Ut ut ante venenatis, rhoncus tellus vitae,
        sollicitudin purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum
        neque nec ullamcorper bibendum. Nam sem turpis, congue id auctor vel,
        tristique sed erat. Nulla sagittis leo vitae bibendum dignissim. Ut
        vitae lacus ut dolor ornare malesuada. Phasellus pulvinar rutrum quam eu
        aliquet. Morbi sit amet diam at purus dictum suscipit ac nec nisl. Nulla
        quis justo feugiat, viverra ipsum sed, lacinia nibh. Praesent pretium
        sagittis interdum. Ut ut ante venenatis, rhoncus tellus vitae,
        sollicitudin purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum
        neque nec ullamcorper bibendum. Nam sem turpis, congue id auctor vel,
        tristique sed erat. Nulla sagittis leo vitae bibendum dignissim. Ut
        vitae lacus ut dolor ornare malesuada. Phasellus pulvinar rutrum quam eu
        aliquet. Morbi sit amet diam at purus dictum suscipit ac nec nisl. Nulla
        quis justo feugiat, viverra ipsum sed, lacinia nibh. Praesent pretium
        sagittis interdum. Ut ut ante venenatis, rhoncus tellus vitae,
        sollicitudin purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum
        neque nec ullamcorper bibendum. Nam sem turpis, congue id auctor vel,
        tristique sed erat. Nulla sagittis leo vitae bibendum dignissim. Ut
        vitae lacus ut dolor ornare malesuada. Phasellus pulvinar rutrum quam eu
        aliquet. Morbi sit amet diam at purus dictum suscipit ac nec nisl. Nulla
        quis justo feugiat, viverra ipsum sed, lacinia nibh. Praesent pretium
        sagittis interdum. Ut ut ante venenatis, rhoncus tellus vitae,
        sollicitudin purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum
        neque nec ullamcorper bibendum. Nam sem turpis, congue id auctor vel,
        tristique sed erat. Nulla sagittis leo vitae bibendum dignissim. Ut
        vitae lacus ut dolor ornare malesuada. Phasellus pulvinar rutrum quam eu
        aliquet. Morbi sit amet diam at purus dictum suscipit ac nec nisl. Nulla
        quis justo feugiat, viverra ipsum sed, lacinia nibh. Praesent pretium
        sagittis interdum. Ut ut ante venenatis, rhoncus tellus vitae,
        sollicitudin purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum
        neque nec ullamcorper bibendum. Nam sem turpis, congue id auctor vel,
        tristique sed erat. Nulla sagittis leo vitae bibendum dignissim. Ut
        vitae lacus ut dolor ornare malesuada. Phasellus pulvinar rutrum quam eu
        aliquet. Morbi sit amet diam at purus dictum suscipit ac nec nisl. Nulla
        quis justo feugiat, viverra ipsum sed, lacinia nibh. Praesent pretium
        sagittis interdum. Ut ut ante venenatis, rhoncus tellus vitae,
        sollicitudin purus.
      </p>

      <Button primary onClick={handleClick}>
        Open Model
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
