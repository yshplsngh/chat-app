

export const Gender = ({ Input, setInput }) => {
  const handleGenderChange = (e) => {
    setInput({ ...Input, gender: e.target.value });
  };
  return (
    <div className="flex mt-2 gap-5">
      <div className="">
        <label className="">
          <span className="mr-2">Male</span>
          <input
            type="checkbox"
            value="male"
            checked={Input.gender === "male"}
            onChange={handleGenderChange}
          />
        </label>
      </div>
      <div>
        <label className="">
          <span className="mr-2">Female</span>
          <input
            type="checkbox"
            value="female"
            checked={Input.gender === "female"}
            onChange={handleGenderChange}
          />
        </label>
      </div>
    </div>
  );
};
