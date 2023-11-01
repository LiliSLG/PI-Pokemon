export const colorsByType = {
  bug: "#A7B723",
  dark: "#75574C",
  dragon: "#7037FF",
  electric: "#F9CF30",
  fairy: "#E69EAC",
  fighting: "#C12239",
  fire: "#F57D31",
  flying: "#A891EC",
  ghost: "#70559B",
  grass: "#74CB48",
  ground: "#DEC16B",
  ice: "#9AD6DF",
  normal: "#AAA67F",
  poison: "#A43E9E",
  psychic: "#FB5584",
  rock: "#B69E31",
  shadow: "#75574C",
  steel: "#B7B9D0",
  water: "#6493EB",
  unknown: "#A9A7AA",
};

export const colorsFontByType = {
  bug: "rgb(7, 27, 82)",
  dark: "#f5f5f5",
  dragon: "rgb(7, 27, 82)",
  electric: "rgb(7, 27, 82)",
  fairy: "rgb(7, 27, 82)",
  fighting: "#f2f2f2",
  fire: "#f5f5f5",
  flying: "rgb(7, 27, 82)",
  ghost: "rgb(7, 27, 82)",
  grass: "rgb(7, 27, 82)",
  ground: "rgb(7, 27, 82)",
  ice: "rgb(7, 27, 82)",
  normal: "rgb(7, 27, 82)",
  poison: "#f5f5f5",
  psychic: "rgb(7, 27, 82)",
  rock: "rgb(7, 27, 82)",
  shadow: "#f5f5f5",
  steel: "rgb(7, 27, 82)",
  water: "rgb(7, 27, 82)",
  unknown: "rgb(7, 27, 82)",
};

export const renderTypesIcons = (pokemon, handleOnClick) => {
  return pokemon.types ? (
    pokemon.types.map((type) => (
      <div key={type.id} onClick={handleOnClick}>
        <img src={`assets/types/${type.name}.svg`} alt={type.name} />
        <p style={{ fontSize: "10px" }}>{type.name.toUpperCase()}</p>
      </div>
    ))
  ) : (
    <span>Types not found</span>
  );
};

export const renderTypeLabels = (pokemon, handleOnClick) => {
  return pokemon.types ? (
    pokemon.types.map((type) => (
      <div
        key={type.id}
        style={{
          backgroundColor: colorsByType[type.name],
          borderRadius: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80px",
          height: "30px",
          margin: "5px",
        }}
        onClick={handleOnClick}
      >
        <span style={{ fontSize: "12px", color: colorsFontByType[type.name], marginTop: "10px" }}>
          {type.name.toUpperCase()}
        </span>
      </div>
    ))
  ) : (
    <span>Types not found</span>
  );
};

export const renderTypeLabelsReduced = (pokemon) => {
  return pokemon.types ? (
    pokemon.types.map((type) => (
      <span
        key={type.id}
        style={{
          fontSize: "10px",
          color: colorsFontByType[type.name],
          backgroundColor: colorsByType[type.name],
          marginRight:"5px",
          marginLeft:"5px",
          paddingRight:"5px",
          paddingLeft:"5px",
        }}
      >
        {type.name.toUpperCase()}
      </span>
    ))
  ) : (
    <span>Types not found</span>
  );
};

//    .bug {
//     background-color: #a7b723;
//   }

//   .dark {
//     background-color: #75574c;
//   }

//   .dragon {
//     background-color: #7037ff;
//   }

//   .electric {
//     background-color: #f9cf30;
//   }

//   .fairy {
//     background-color: #e69eac;
//   }

//   .fighting {
//     background-color: #c12239;
//   }

//   .fire {
//     background-color: #f57d31;
//   }

//   .flying {
//     background-color: #a891ec;
//   }

//   .ghost {
//     background-color: #70559b;
//   }

//   .grass {
//     background-color: #74cb48;
//   }

//   .ground {
//     background-color: #dec16b;
//   }

//   .ice {
//     background-color: #9ad6df;
//   }

//   .normal {
//     background-color: #aaa67f;
//   }

//   .poison {
//     background-color: #a43e9e;
//   }

//   .psychic {
//     background-color: #fb5584;
//   }

//   .rock {
//     background-color: #b69e31;
//   }

//   .steel {
//     background-color: #b7b9d0;
//   }

//   .water {
//     background-color: #6493eb;
//   }

//   .unknown {
//     background-color: #a9a7aa;
//   }
