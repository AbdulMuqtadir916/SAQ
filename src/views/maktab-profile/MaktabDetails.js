import React from "react";
import { useContext } from "react";
import dots from "./icons/dots-vertical.svg";
import { Row, Col } from "reactstrap";
import BarChart from "./FullChart";
// import MaktabPerformanceCard from "./MaktabPerformanceCard";
import MaktabTrackers from './PerformanceCards';


// ** Styles
import "@styles/react/libs/charts/apex-charts.scss";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

// ** Context
import { ThemeColors } from "@src/utility/context/ThemeColors";

// ** Third Party Components
import "chart.js/auto";

import "@styles/react/libs/flatpickr/flatpickr.scss";

function MaktabDetails() {
  // ** Context

  const { colors } = useContext(ThemeColors),
    { skin } = useSkin(),
    labelColor = skin === "dark" ? "#b4b7bd" : "#6e6b7b",
    tooltipShadow = "rgba(0, 0, 0, 0.25)",
    gridLineColor = "rgba(200, 200, 200, 0.2)",
    lineChartPrimary = "#666ee8",
    lineChartDanger = "#ff4961",
    warningColorShade = "#ffbd1f",
    warningLightColor = "#FDAC34",
    successColorShade = "#AA3050",
    primaryColorShade = "#836AF9",
    infoColorShade = "#299AFF",
    yellowColor = "#ffe800",
    greyColor = "#4F5D70",
    blueColor = "#2c9aff",
    blueLightColor = "#84D0FF",
    greyLightColor = "#EDF1F4";
  return (
    <div>
      <div className="card d-flex">
        <div className="card-body">
          <div className="d-flex align-items-center pb-1 justify-content-between">
            <h4 className="fw-medium mb-0"> Maktab Details </h4>
            <img src={dots} />
          </div>

          <div className="demo-inline-spacing gap-2">
            <div className="d-flex align-items-center me-1 pe-1 gap-1">
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE5klEQVR4nNVaWYgcZRD+FY1KCIongoGowWM301WzgxDUsB6s90xVLwx4BH2RiMeLER+iD0ElRh/UKFGMDxqWbGb+6t1VXBJjUBRBRFQQifoQQVQ2Jh4JMeKRNVn5u//ezD2dne7Zng/6YXu66q+v66/jr16lYsa4454rQBsEea8gz/gX8EEB2jyecS9QvQAvQys00r6QgAb6rfJvAf5BgB8qI93yxuA9p6o0Qpz8hcZwnwDSpAf5/vC3Uo4vFqAPZwkFpHaPZYYvUmmDIL9tDRybUeqE2t/fBDpDHF6tkR7TyLsCQvRFo2fnDWXHXaaRjwrSoYkr+Kx2zxtSGuknQ6YMhWtVWiBIjwRbil+NLAP8ZOBB2qDSAgHaGhjl3hVZJlso2Hh6V6UtPrwsXR9ZxuGrbZx8qtICQS5bj9waVcYDvsFmsB0qLRDkNTZjrYssA3SfJbJJpQUa+CUbuJujypjCaGNkXKUFgjzhp9+se3tUmfKAuzysJSotEKAX7TZ5PqqM5/Bw0Mbweyot8ICusXXkQGVr0gxvXVpYJMhf2bh6XKWyRUH6vV1DqJG2hE2kqfIqTdi+9KZTBPjzwMCC26q5FKD/NPI/Y7nhy1rplL7iAo38rAbaI8BTArTe3EuEQNXCWLjbZq8vmy1omkqbrba018fPVHXMwdHgaZU0TCerkT+yZJ6o/b3s0I12+x0q9dPidvrEeMF0DEhXlmH4KrsdpxIj0NgrvK2BYaP2za6JpAsCIj4Jx73OemRPIob7C2YoI8CPmgZQgP62xt5f9xzSRuutXwR4RAOv3Losf15zIrS+dmsJ8p+C7lBsxq9Va0/0kGl2K4V7GPmoRn79g8HBk2pljNF1zwNPa6CSDHCujkhfcYFPBnjKPzYDf2ZfxF8lhy/pmIRk80sF6JMKg/YL0msa+Y7xnHt+O3lTazQUHhagdwTocIWeCTO8aPXyBEnbLVbqiETZobwJ1rAOaHAfHHGGFs5Vn5msmBTrT1rQz2b7TIvf7PkS0JLwNGqIzWlRwUJfRQyUJVc8fa4E6gzsp8XHMh4fNAOL5nYEo6Yq71cVnfrASvv1ozkyb8qtOrlh0em1S5siWVl0VI+hXFkkQ1aqRyGh/fO9LeK6lAB9M99GdHwBf6085Jvtjf2judvOVj0C6SueGc6aTW0LbpoK65OhjapHoIFftja/X1Xogp6Hp80ct1bI76nmp87s9dAtNpw1A0+bA1qdvRWd6c5aQQH6eR73/68N7NlpbX2lzlUmPoLmj2fMXLbKjch/mPvdjKHRwB7/ENZ4ZswHBIvnNBT2O9IWb8d8keoWES9DK1p6yuHVTYX9vgv44+YK6N5uERHgVc3s8G2cyxDCzJ4skedUl6CRX4h97nVsKkjbVZcgyDvajZaOG6UsX27d+r3qEsR8AUaeaTf7Oi6Yfl+Q/hWkI52cBqNixBla6J8CgQ77Z404YfoZP3M5hWysihutNcA5m2J3xa/cTggF6U6VMDTwShvoXuzKw6+wGump2JXXr7Wu2bSyY5hRj31LYyphCPJE0GFE/3AUXTkQzvb+CUMDfeu35+hC7MrNNw/TbSaSSWozJJihHR2R5cXTEllEgL6LPbc3q1nAu5Naw3xpmoy92tZAoODapDKZ1BrmzPKAcbsZwyS2hvmPiGAeXDfNb4X/AZjYRC77dKflAAAAAElFTkSuQmCC"
                  width={40}
                />
              </div>
              <div>
                <p className="fw-semibold fs-3 mb-0">04</p>
                <p className="mb-0">Ustadh</p>
              </div>
            </div>
            <div className="d-flex align-items-center me-1 pe-1 gap-1">
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEElEQVR4nO2Yv0tcQRDH12iTaC/EVKkkeG9GrxEsJEUqzZu5g2stcn9ACu21TJsqJJBCC7mdM42FyBEMKFgoSEiR+C+IljmSCHKy5+m9XHzknu9+7Mp+Yaq3u28+Oz92WaW8vLy8vLw6IEHeEeSaW0Z7t4HUXDQVB6IckXgQyyQ+IpZJXIhIOQgnBfmbAH2tKTXgHMiyWn6gkZYE6Y/xRQMfxo21FmR94uWoBtq6OSOA19aCF8NOgQiEOQ101gA4LSPTf+fYBCLThYcC9Pb63xr4s8DcWFtzuwFSCnITGvnI5PRGJv+0LUemOCvIx3UA5N+CtBhX2D0BEQwXBPlnc1fprATh87jxxllBft0saPphulTy/3JnQEwhauDVaHE2i9U4ScXWOZ8yuSd/3bKB3m1m5x8lhegYyEY2P17v81fO/DI7XF+jUBgU5DeR2+n7L7OzQ+ZbOeB80oLuKogO+JUGrjYgvpv6+HctKkZSZ0uQPkaiUFmfDB+rlJK7gtQ7DNKHaCrJs8JI3PgS5Gc00kkE4FwDrZhDLy1EKhDTkRotsmqiotqQ6WACdGA62l0KujsRAdo3dXFbKvVDYtOBmEbiQSyT+IhYJvERUUke8eiilMlNWRsRSfYKuHNfQLbvAQj1PrUEqJJwpy002nP2FV5azLk7Vqs8iPUREcdNmYrvtxNpTSPv9jszvLy8VG90Ca8qtw7l58p4AAAAAElFTkSuQmCC"
                  width={40}
                ></img>
              </div>
              <div>
                <p className="fw-semibold fs-3 mb-0">04</p>
                <p className="mb-0">Jamaaths</p>
              </div>
            </div>
            <div className="d-flex align-items-center me-1 pe-1 gap-1">
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEnElEQVR4nO1Ya2hcVRC+vq1vqohaRSjiI3XvnHWNVBQCohBpe2d24SoW34KvHz7wT0FsfeCPVv3j40e1IGqb7JlNbK2lImILQn2BNcTqD1uVFGvxQatVtmqrkbn37GaT3HuS+8BsYD84kOSezMx3ZuacmXGcDjrooIO02HCRdzID3q4VrmXAjxhohAHrGuh5ZzZgY2nxCVrhU1rRAVY0OnnhP1ykK512xkChMp+BvowmMGEB7mVFy193rzvRaScMlspns6Ld0yIx3kOfcJc/12kXaMDNyUk0vEMD/6ux7PtHsVu+hhW+zIBDQXgA/qpV+YHUJMY88yIr2siKvmOg37Si/XwZlXInUXXLlzLgp9kNTuSp9/oX4Hn5kYDKVQx40Aj/Wa7QKiBVVblbPJKP4fi7VnRTzfWKXMCCVvRny7dNfUXvnEwkuNs/S4w3JNatBzyt9Xut6F2ez+nj4dWlu49p6i2We8MQpj2GzGebL+g9LjURrWilCNIK35Ucmfh9hbPiyLxCaeIhCeRvDPiVIfuQkxas6FsRIicfuwewnpWEVvTvqz23HR8lv+riErPv81Qk5LESBaxo3xRkt+SQ2COx8rv8Yxnwbw10SH5OVy+FSnZaiQA9ndkjQK9NoWMktGXRvMRETPz/EdRNEfnRgFb0cQ45MmyzRSv8UfatKy0+w0kDucuNoh4Lkf055MiBOPk1WLIg9Bp+nYpESASHgmRXZd9Cdmf20Io3Uo9VDsPpSCz05zROS8IsVhHQS9lDC1+wtQbceJAX+nMSExl1nCM04C/mDldx+wYL5XM14A8ZiHxvS+KBUuViY8NPTlpIOWKE1N/sptPj9kmBl5aI7Y1aHz6IQRmkgV5JTUTuba1oa6DQpYrNe80rMtnaLf8bJ7emCA2JbW9c0XuKkwUavIdNHG+ykla0LDERoEetuhUOGt2POFkx6JbPlB7BCFxqTUpT0kyTxAh3+SfFyaspuj6oLADrmavfBljRg+ENhm/b9+HS6RPx7rDKAqoZnY/lQiIQWvQ8I3TQtk/em+mHlnerVadCPdUblhga6AZze/Xl5xG8x6pT4dpgXxFvyYVEkCMy7Qhvj2ftRGh5gkfwObssXGUIf5hp0iIJxoBPtHSIe2xJp126c3yLOlVZQodY4f1x129fqH9vyxxsWaKiUV5xDdgvPUBLGLwjL3jkOwN0s1a0Pe2DKDWUJH5UKztQrJzPCt9vsaPOQGv6XbownkCXP1cSzDRTo4ZIlV26ejLZRfM04ONjPXUOKxgv0ZMTD0w8VlXetQz0VjBybXqTVsuVP86w/iJdwoC7jFDpQVbK9DDqhKRUGOetnJcWI4HWiK5J+guV+WGRin8Z8kPNkVHY0uI3Rsi2uAKOFd2XR3+ewEMHJYeibJHQYoVfBDYr2r61p+fo1tJiOGoAIN1h8yqcgaVFd0SHyiX/1GAyGezDu4TIcPCLizdGegLomZkiwc2Fq6Js00W61+zZ4pjEGZ3la1+znZ3NSyv6IMpjLWHVvMlmfgHuctJAEl9msm1E5HDcNNIKGSprRTvaKHx2tA66O+iggw46cNoB/wEOuk8geEGXTQAAAABJRU5ErkJggg=="
                  width={45}
                />
              </div>
              <div>
                <p className="fw-semibold fs-3 mb-0">120</p>
                <p className="mb-0">Talaba</p>
              </div>
            </div>
            <div className="d-flex align-items-center me-1 pe-1 gap-1">
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAENElEQVR4nO2ZW4gcVRCGS1ejUbwjIqIPGo3uZrpqdrwsCi4IwZXNTlUPtIoShShCVFREEH2JQTBPUfOQaBBUFN05NZuLCqLGkKgg8UHwEgneHkJUJOgaRUXjZaW6T68bcWd6Zna3W9wP+q2r5q/pc+pU1QGYZ57/FloeWaQYXq/IqxV5nZI87Ijv1yC8Ysfg4BFQZDSKelwgKxzJbiWZmPZB/qxerl4ORWRTJTxdkd/+W6x86YjVkTyigdwdP/GX4Y99MD87lPUN4kuhKGxBPjEV6JA/UQyHJwAO+7d3V8Gqw5V47T++Uv3FyrJjIG8U+elEEL+rleiEVu8nwVR7FfkuRd7vg9kMeaKVZWcp8u8O5bc6hdiu/VipdraSjMfBlMMhyAslvjVeUsSbOvXhkB9IlxjkhZJs8cvqpk59jJblAv9nfA554Uh2mYh6fzjQVdom+cWR/JnbpleUTy2QsUrt/C79fG9+LANCHjjkPfHSKlUXd+dHfjI/z148dDzkgaK8ES+tLk5q7Y1O9pv9x5lV144IkrpPndd26qMRVC/xgXwAeREXgknJsaYLH/d4H49BXtQDvtKn3+2d+nDEL3kf10FeNEiuSs4A+aGT8lx7owWKfCD5IuHw7KjMIgR5py8W752uUGyG2SjJfYkPeR3yIk2/ndRZKWbrS/+PIC8UpRH/m4Gs6NgH8c2+RNGZVdeWiOoN/t/ca81T2/ZxwyV7kxTOy2dHZRYhUdSjKGNWJ1mZYb1GVtu4L/GliVXPGkU9kDeK/J4JauBIX2abEpd8otgDRUGTSYmJeqgNmzU+dT8ORUH7peLLjHGl6NRs9RV/G2c8rF0GRcIhb/Wlxs7NF8kp0723dXH1OEf8qk8S26BoKA6foSRft2q0rHfxAR8Yrcg5UETUJiktAoknKH5QB0VFiT9sFciUHn0fFBX1rW89CJc0HSElX2Q/FJHnl4ycZl2eiRzt4zOne8+GePEBSvyrBQVFQktccijv+xT8Sqv3ra5KD8NGuXoh5E0DR/qss1Pkg+ns1wbarewsPU9O7W1SSfKkIhPMJdZANQKpWVeYLJG4u/vDZsDtjHPi8wTlidh2cqDNbzmUqzdWbjly1gJ4avDGoxXl9slqNWmGbIyzsdnmbkWcxZA3pPvLP18oyZ06EC2csQCsi7N+w+48JgMg2e0ovOO50vBJM/U7akkAw9um7DVbql9Zv9JJ93kIzwRLj1WUF6YEsGsupuZK4dKpF0dW/piWjpy9vGjoKEfypnf0jQZ8DcwxWubl6ZKLtfRGC9p3gvxoegKPBnLerCjNmtqJ9/lksLYt4zGqnWuXN5ZRbBIIOVPvDwd8ZjxoN8aZDR3xgz7HvwYFQVG2eU2rsxsRv+M32kooCEqyMk04mY0cyXdN78rzfcazRT4QLSyA2Ilmjx3OXXzceeb53/EXBSUaEf1JCe4AAAAASUVORK5CYII="
                  width={45}
                />
              </div>
              <div>
                <p className="fw-semibold fs-3 mb-0">70</p>
                <p className="mb-0">Ladkay</p>
              </div>
            </div>
            <div className="d-flex align-items-center me-1 pe-1 gap-1">
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEN0lEQVR4nO2Za2hcVRDHj2+rVbQqCj7wSXXb3ZnrUomCzQcfBJO9MzdyoQVR6vNLP1SkH4pIQMT6pSJ+kBaFgjFmz2zaBhGlikQtgtYWpWgLrSIItfFZpT6gWCNz71ncGLKbbM7e3cL+4X669/zOzHnNnLnGdNVVV5lqFOhqQXpCgN+1QAcE+DcL/IdF/kKQNklx4CrTyRopDlwsyFst8j+CPFXn+V2QN5QxvFNy8RLTSSoXouUW6fvUUDomwK9UCjwwhoM3SC5ePL40PK98c9QjwCPTnAL6yyJv1kFotw9mtMjXCfKkM+zt0WV0Zb3vywUqCfLzgrxdHXHtvlKnTbs0ZcwpFnnCzcSbW4qPnjGf9ttX8EUWaadz5vO3ru87y7RDEkSrnBFHdgBd0Axja+8DZwvwl8qxED5u2iEL/FFqAD+yEI7up3RA+JDOsslSkg+Xutn49dXCXecuhDVkhk4V4MPK04PDZCkBXutGccQLD2nY8db64M29Y+CK2+QPeeKtdzP8kslSSdTWpYAReOEhr072G9JOk5UmentPF6DjgnRCeuJFPpiVPN3uAuVnJiu9vrx0qVsGP3gOrFOC/I3JShUoLXOO7PfFFOi/3G32wyYrlYNwpdvou3wxZUV8mZuRSV/Mxp1CGKWBkMa9MTG+xM3Ij76Yc+g0vN/NyLA3Zi5e4mbkF1/Mxp0CPeY63XKyO7LObfYXTm5HkDc4Rzb6Yo7k+y9sgyO0yW3M9b6YbxQHznGD86fJSoJkk06DaJVn7rGEm4sX++TW63BXkmcF4UqfXIv0tXLH8oPXmlZL7x5a3tE8S1MVn2wBeidNHHm1T+4snfHTrcpSbYEfdIH2oG/2zM6AX3TBcK9A1K+bdKHMbfnoiiQ2AR9yjhwwrZaWewT525ra1HEB2m2RXtPZKgNxo3t3BfhuQXomuZwB7a+tdVmgg5qUmiykFRMBftIif5zeS/5XTQz41tnaCoa5mdVH+lmdssD3SS4+MxMnZhjWEy8SICwHdG9iEPJUBem22b7Xd1Xjy0j3SKF0jRYfTCdoQm+MyM9Va1z1qir6rqYyuVHbmk5QJaA7BOkTZ9jfEoRhoza6j5Jv0za7lWHatpyQHhbkfTWb/ogEUd9cGcmyqs5M+uxLmJ5qAHU1fEvf+YI8pJefGgMmLdJT+q4Znrad5hAk7KFmeA0lcXya1mUt0E81J81egXCNj8KzMpQlyqx1CGidt4NAj9r/Ku7JEnpfSzemlfUA4A9qBuy9Zgvk01Nr4D3V6oZGcpORygUqWaDvXN97FpRBWOCXqz9iNI0wGWtbkrq4tAV5c1OQ0YBvSo7I5EidPVK3WpUkgNIJtWOsOHjjvAEarNw63WHaLAs07vKwZ5tozJ+myypcY9osSU60NHjOu7FFPtrgN3Pmj0U+2vR1tpMei/zhvB3pqquujOpf+hQthTMvXCsAAAAASUVORK5CYII="
                  width={40}
                />
              </div>
              <div>
                <p className="fw-semibold fs-3 mb-0">50</p>
                <p className="mb-0">Ladkiya</p>
              </div>
            </div>
          </div>

          <div className=" pt-3 ">
            <h4 className="fw-semibold mb-0"> Overall Maktab Performance </h4>
          </div>

          <div>
            <Col>
              <BarChart
                success={successColorShade}
                labelColor={labelColor}
                gridLineColor={gridLineColor}
              />
            </Col>
          </div>
          <Row>
          
            <MaktabTrackers />
            
          </Row>
        </div>
      </div>
    </div>
  );
}

export default MaktabDetails;
