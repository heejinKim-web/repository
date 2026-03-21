const SOVRAN = "modal/SOVRAN";
const BLOODINSIDE = "modal/BLOODINSIDE";
const SPRITUALINSTINCT = "modal/SPIRITUALINSTINCT";
const CLOSE = "modal/CLOSE";

export const sovran = () => ({ type: SOVRAN });
export const bloodinside = () => ({ type: BLOODINSIDE });
export const spritualinstinct = () => ({ type: SPRITUALINSTINCT });
export const close = () => ({ type: CLOSE });

const initialState = {
  isOpen: false,
  data: null,
  id: null,
};

function modal(state = initialState, action) {
  switch (action.type) {
    case SOVRAN:
      return {
        ...state,
        isOpen: true,
        data: "Sovran is the sixth studio album by Swedish gothic metal band Draconian, released on 30 October 2015 through Napalm Records. It's the first album with new singer Heike Langhans (:LOR3L3I:, REMINA) after the departure of Lisa Johansson in 2011. It's also the last album to feature bassist Fredrik Johansson, who left the band in April 2016.",
        id: 1,
      };
    case BLOODINSIDE:
      return {
        ...state,
        isOpen: true,
        data: "Blood Inside is the sixth full-length studio album by Norwegian experimental electronica band Ulver. Produced by Ulver, together with Ronan Chris Murphy, the album was recorded and mixed in early 2004, and issued in June 2005 via Jester Records. The album sees Ulver return to more classically-based arrangements and instrumentation.",
        id: 2,
      };
    case SPRITUALINSTINCT:
      return {
        ...state,
        isOpen: true,
        data: "Spiritual Instinct is the sixth studio album by French post-black metal band Alcest. The album was released on 25 October 2019 through Nuclear Blast and garnered positive reviews from critics. Spiritual Instinct features Alcest live bassist Indria Saray performing on bass in the studio for the second time in the history of the band after Kodama.",
        id: 3,
      };
    case CLOSE:
      return {
        ...state,
        isOpen: false,
        data: null,
        id: null,
      };
    default:
      return state;
  }
}

export default modal;
