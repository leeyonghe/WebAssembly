cmake_minimum_required(VERSION 3.0.0)
project (index)

add_definitions(-std=c++14)
set (CMAKE_CXX_STANDARD 14)

# # Boost
# include_directories (AFTER /usr/local/Cellar/boost/1.75.0_1/)
# link_directories(/usr/local/Cellar/boost/1.75.0_1/stage-emscripten/lib/)

# # Beast
# include_directories(/opt/libs/Beast.js/include/)

# if (DEFINED EMSCRIPTEN)
#   if (CMAKE_BUILD_TYPE MATCHES Debug)
#     add_definitions(-g)
#     add_definitions(-g4) # Generates emscripten C++ sourcemaps
#   endif()
# endif()

include_directories(BEFORE ${CMAKE_CURRENT_LIST_DIR}/src)
file (GLOB_RECURSE SRC_FILES src/*.cpp)

if (DEFINED EMSCRIPTEN)
  
  #add_library(index SHARED ${SRC_FILES})
  add_executable(index ${SRC_FILES})

else (DEFINED EMSCRIPTEN)
  add_executable(index ${SRC_FILES})
endif(DEFINED EMSCRIPTEN)

# target_link_libraries(index boost_system)

#file (COPY ${CMAKE_CURRENT_LIST_DIR}/Arial DESTINATION ${CMAKE_CURRENT_BINARY_DIR})

if (DEFINED EMSCRIPTEN)
  set_target_properties(index 
    PROPERTIES SUFFIX ".html"
    LINK_FLAGS " --bind -s  NO_EXIT_RUNTIME=1 -g4 --source-map-base http://localhost:8000")
  em_link_js_library(index ${libraryJsFiles})
  # add -O2 to minify
endif (DEFINED EMSCRIPTEN)

