import React from "react";

const CreateCategory = () => {
  return (
    <div className="col-md-12 col-lg-4">
      <form>
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
            Имя категории
          </label>
          <input
            type="text"
            placeholder="Введите имя категории"
            className="form-control py-3"
            id="product_name"
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Картинка</label>
          <input className="form-control" type="file" />
        </div>
        <div className="mb-4">
          <label className="form-label">Описание</label>
          <textarea
            placeholder="Введите описание"
            className="form-control"
            rows="4"
          ></textarea>
        </div>

        <div className="d-grid">
          <button className="btn btn-primary py-3">Создать категорию</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
