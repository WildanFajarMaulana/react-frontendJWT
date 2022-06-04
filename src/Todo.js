import React from "react";
export default function Todo() {
  const [activity, setActivity] = React.useState("");
  const [data, setData] = React.useState([]);
  const [edit, setEdit] = React.useState({});
  const [pesan, setpesan] = React.useState("");

  function generateId() {
    return Date.now();
  }
  function saveTodoHandler(e) {
    e.preventDefault();

    setpesan("");
    if (edit.id) {
      // mengisi data yang akan diubah
      const updateData = {
        // id: edit.id,
        ...edit,
        activity: activity,
      };

      // ambil index berdasarkan id yang akan di edit
      const editDataIndex = data.findIndex(function (data) {
        return data.id == edit.id;
      });

      // ekstrak semua  data yang disimpan
      const updateDatas = [...data];
      updateDatas[editDataIndex] = updateData;

      setData(updateDatas);
      return cancelEdit();
    } else {
      if (activity == "") {
        setpesan("Tolong Masukkan Inputan");
      } else {
        setData([
          ...data,
          {
            id: generateId(),
            activity: activity,
            done: false,
          },
        ]);

        setActivity("");
      }
    }
  }
  function hapusData(id) {
    const filterData = data.filter(function (data) {
      return data.id != id;
    });
    setData(filterData);
    if (edit.id) cancelEdit();
  }
  function editTodoHandler(data) {
    setActivity(data.activity);
    setEdit(data);
  }
  function cancelEdit() {
    setActivity("");
    setEdit({});
  }
  function doneTodoHandler(dataCheckbox) {
    const updateData = {
      ...dataCheckbox,
      // id: dataCheckbox.id,
      // activity: dataCheckbox.activity,
      done: dataCheckbox.done == false ? true : false,
    };
    // ambil index berdasarkan id yang akan di edit
    const editDataIndex = data.findIndex(function (dataCek) {
      return dataCek.id == dataCheckbox.id;
    });

    // ekstrak semua  data yang disimpan
    const updateDatas = [...data];
    updateDatas[editDataIndex] = updateData;

    setData(updateDatas);
    console.log(updateData);
  }
  return (
    <>
      <h1>Simple Todo List</h1>
      {pesan ? <div style={{ color: "red" }}>{pesan}</div> : ""}

      <form onSubmit={saveTodoHandler}>
        <input
          type="text"
          placeholder="Nama Aktifitas"
          value={activity}
          onChange={function (e) {
            setActivity(e.target.value);
          }}
        />
        <button type="submit">{edit.id ? "Simpan Perubahan" : "tambah"}</button>
        {edit.id ? <button onClick={cancelEdit}>Batal Edit</button> : ""}
      </form>
      {data.length > 0 ? (
        <ul>
          {data.map(function (data) {
            return (
              <li key={data.id}>
                <input type="checkbox" checked={data.done} onChange={doneTodoHandler.bind(this, data)} />
                {data.activity}/{data.done ? "selesai" : "belum"}
                <button onClick={editTodoHandler.bind(this, data)}>Edit</button>
                <button onClick={hapusData.bind(this, data.id)}>Hapus</button>
              </li>
            );
          })}
        </ul>
      ) : (
        <i>Tidak ada Data</i>
      )}
    </>
  );
}
